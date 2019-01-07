import React, { Component } from "react";
import "react-daypicker/lib/DayPicker.css";
import cuid from "cuid";
import { connect } from "react-redux";
import { reduxForm } from "redux-form";
import { Field } from "redux-form";
import {
  composeValidators,
  combineValidators,
  isRequired,
  hasLengthGreaterThan
} from "revalidate";
import moment from "moment";
import { createEvent, updateEvent } from "../eventActions";
import TextInput from "../../../app/common/form/TextInput";
import TextArea from "../../../app/common/form/TextArea";
import SelectInput from "../../../app/common/form/SelectInput";
import DateInput from "../../../app/common/form/DateInput";

const mapState = (state, ownProps) => {
  const eventId = ownProps.match.params.id;

  let event = {};

  if (eventId && state.events.length > 0) {
    event = state.events.filter(event => event.id === eventId)[0];
  }

  return {
    initialValues: event
  };
};

const actions = {
  createEvent,
  updateEvent
};

const category = [
  { label: "Drinks", value: 'drinks' },
  { label: "Culture", value: 2 },
  { label: "Film", value: 3 },
  { label: "Food", value: 4 },
  { label: "Music", value: 5 },
  { label: "Travel", value: 6 },
  { label: "Other", value: 7 }
];

const validate = combineValidators({
  title: isRequired({ message: "The event title is required" }),
  category: isRequired({ message: "Please provide a category" }),
  description: composeValidators(
    isRequired({ message: "Please enter a description" }),
    hasLengthGreaterThan(4)({
      message: "Description needs to be at least 5 characters"
    })
  )(),
  city: isRequired("city"),
  venue: isRequired("venue"),
  date: isRequired("date")
});
class EventForm extends Component {
  onFormSubmit = values => {
    values.date = moment(values.date).format();
    if (this.props.initialValues.id) {
      this.props.updateEvent(values);
      this.props.history.goBack();
    } else {
      const newEvent = {
        ...values,
        id: cuid(),
        category: 'Other',
        hostPhotoURL:
          "https://boostchiropractic.co.nz/wp-content/uploads/2016/09/default-user-img.jpg",
        hostedBy: "Bob"
      };
      this.props.createEvent(newEvent);
      this.props.history.push("/events");
    }
  };
  render() {
    const { invalid, submitting, pristine } = this.props;

    return (
      <div className="container">
        <div className="row">
          <div className="EvDet-main col-8">
            <form
              onSubmit={this.props.handleSubmit(this.onFormSubmit)}
              className="RegForm EvDet-main"
              action=""
            >
              <label className="EvForm-lable">Event title</label>
              <Field
                className="EvForm-field"
                name="title"
                type="text"
              
                component={TextInput}
                placeholder="Give your event a name"
              />
              <label className="EvForm-lable">Category</label>
              {/* <Field className=""  name="category" type="text" component={SelectInput} options={category} placeholder="What is your event about" /> */}
<div className="EvForm-field input-group mb-3">
  <div className="input-group-prepend">
    <label className="input-group-text" for="inputGroupSelect01">Options</label>
  </div>
  <select className="custom-select" id="inputGroupSelect01">
    <option selected>Choose...</option>
    <option value="1">drincs</option>
    <option value="2">Two</option>
    <option value="3">Three</option>
  </select>
</div>

              <label className="EvForm-lable">Description</label>
              <Field
                name="description"
                type="text"
                component={TextArea}
                rows={3}
                placeholder="Tell us about your event"
              />
              <label className="EvForm-lable">Event day</label>
              <Field
                name="date"
                type="text"
                component={DateInput}
                dateFormat="YYYY-MM-DD HH:mm"
                timeFormat="HH:mm"
                showTimeSelect
                placeholder="Date and time of event"
              />
              <label className="EvForm-lable">Event location | City</label>
              <Field
                name="city"
                type="text"
                component={TextInput}
                placeholder="Event city"
              />
              <label className="EvForm-lable">Venue</label>
              <Field
                name="venue"
                type="text"
                component={TextInput}
                placeholder="Event venue"
              />
              {/* <label className="EvForm-lable">Hosted by</label>
              <br />
              <Field className="EvForm-field" name="hosted" type="text" component={TextInput} placeholder="Event hosted by" />
              <br /> */}
              <hr />
              <button
                disabled={invalid || submitting || pristine}
                positive
                type="submit"
              >
                Submit
              </button>
              <button onClick={this.props.history.goBack} type="button">
                Cancel
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(
  mapState,
  actions
)(
  reduxForm({ form: "eventForm", enableReinitialize: true, validate })(
    EventForm
  )
);
