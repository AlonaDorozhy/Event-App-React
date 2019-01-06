import React from 'react';
import User from '../../../img/user.png'


 const style ={
   width: '50px'
 }
const styleTextarea ={
   width: '100%'
 }
const EventDetailedChat = () => {
  return <div className="row">
  <div className='col-12'> 
      <div className='col-12'>
        <div>Chat about this event</div>
      </div>

    <div className='row'>
        <div className=" col-12 Comment.Group">
          <div>
            <div className="EvLiAtt-avatar">
              <img src={User} style={style} alt="user" />
            </div>
            <div className="Content">
              <div classNane="Author" as="a">
                Matt
              </div>
              <div className="Metadata">
                <div>Today at 5:42PM</div>
              </div>
              <div className="Text">How artistic!</div>
              <div className=" Action">
                <a href="/">Reply</a>
              </div>
            </div>
          </div>
    <div className='row'>
        <div className="col-12 Comment.Group">
          <div>
            <div className="Avatar">
              <img src={User} style={style} alt="user" />
            </div>
            <div className="Content">
              <div classNane="Author" as="a">
                Matt
              </div>
              <div className="Metadata">
                <div>Today at 5:42PM</div>
              </div>
              <div className="Text">How artistic!</div>
              <div className=" Action">
                <a href="/">Reply</a>
              </div>
            </div>
          
            <div className="Avatar">
              <img src={User} style={style} alt="user" />
            </div>
            <div className="Content">
              <div classNane="Author" as="a">
                Matt
              </div>
              <div className="Metadata">
                <div>Today at 5:42PM</div>
              </div>
              <div className="Text">How artistic!</div>
              <div className=" Action">
                <a href="/">Reply</a>
              </div>
            </div>
            </div>
            <div className="Avatar">
              <img src={User} style={style} alt="user" />
            </div>
            <div className="Content">
              <div classNane="Author" as="a">
                Matt
              </div>
              <div className="Metadata">
                <div>Today at 5:42PM</div>
              </div>
              <div className="Text">How artistic!</div>
              <div className=" Action">
                <a href="/">Reply</a>
              </div>
            </div>
      
        </div>
        </div>

          <div className="col-10">
            <textarea style={styleTextarea} />
            <button>Add Reply</button>
          </div>
        </div></div>
      </div>
    </div>;
};

export default EventDetailedChat;
