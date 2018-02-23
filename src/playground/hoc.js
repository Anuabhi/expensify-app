import React from 'react';
import ReactDOM from 'react-dom';

const Info =(props) =>(
    <div>
    <h1>Info</h1>
    <p>The inof is: {props.info}</p>
    </div>
);

const withAdminWarning=(WrappedComponent)=>{
    return (props)=>(
       <div>
       {props.isAuth &&<p>Authenticated Sucessfully.</p>}
       <WrappedComponent {...props}/>
       </div>
    );


};

const requireAuthentication=(WrappedComponent)=>{
    return (props)=>(
       <div>
       {props.isAuth ?(<p>This is private Info .Please dont share<WrappedComponent {...props} /></p>):
      ( <p> Uthentication failed</p>)}
       
       </div>
    );


};


const AdminInfo=withAdminWarning(Info);

const AuthInfo=requireAuthentication(Info);


ReactDOM.render(<AuthInfo isAuth={true} info='This is crazy' />,document.getElementById('app'));