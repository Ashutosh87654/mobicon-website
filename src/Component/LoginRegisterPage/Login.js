import React, { useContext, useEffect, useState } from "react";
import "./Login.css";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookSquare } from "react-icons/fa";
import { BsEyeSlash, BsEye } from "react-icons/bs";
import { loginContext, userContext } from "../Basics/ProviderComponent";
import axios_post from "../../AxiosLinks/AxiosLinks";

const Login = () => {
  const setUserDetails = useContext(userContext).setUserDetails;
  const userState = useContext(userContext).userState;
  const [password, setPassword] = useState("");
  const [isLogin, setIsLogin] = useState(true);
  const [text, setText] = useState("none");
  const [showPassword, setShowPassword] = useState(false);
  const [message, setMessage] = useState("");
  const [verificationVisibility, setVerificationVisibility] = useState(false);
  // const setUserCartDetails = useContext(userCartContext).setUserCartDetails;
  const [checkingInfo, setCheckingInfo] = useState(false);
  const [tempName, setTempName] = useState('')

  const loginVisibility = useContext(loginContext).loginVisibility;
  const setLoginVisibility = useContext(loginContext).setLoginVisibility;

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    
  }, [])
  

  useEffect(() => {
    if(userState.email=='')
    setEmail((val) => "");
    setName((val) => "");
    setPassword((val) => "");
    setMessage((val) => "");
  }, [isLogin]);

  const loadCheck=()=>{
    if(userState.email!=''){
      let temp = userState.email;

      if(userState.isVerified){
        window.alert("You are already verified")
        setLoginVisibility(false)
        return
      }
      setEmail(val=>temp);
      setVerificationVisibility(true)
    }
  }

  const login=async()=>{
    console.log(name,email)
    console.log(tempName)
    let name2=name;
    if(name=='')name2=tempName;
    await setUserDetails(name2, email );
    sessionStorage.setItem("userEmail", email);
    sessionStorage.setItem("userName", name2);
    sessionStorage.setItem("isLogin", true);
    setLoginVisibility(false);

    //set login validity 24 hours
    localStorage.setItem("userEmail", email);
    localStorage.setItem("userName", name2);
    localStorage.setItem("isLogin", true);
    localStorage.setItem("lastLogin", new Date().toLocaleDateString());

    clear()

    return "";
  }
  const clear= ()=>{
    setName('')
    setEmail('')
    setPassword('')
    setVerificationVisibility(false)
    setMessage('')
  }

  const toggleShowPassword = () => {
    setShowPassword((val) => !val);
  };
  const loginButtonClick = async (e) => {
    e.preventDefault();
    setCheckingInfo(true);
    if (email.length < 1 || password.length < 1) {
      setMessage("All fields are mandatory.");
      setCheckingInfo(false);
      return;
    }
    let res = "";
    setMessage("");
    if (isLogin)
      res = await loginCheck(
        email,
        password,
        setUserDetails,
        setLoginVisibility,
        setMessage,
        setVerificationVisibility,
        setTempName
      );
    else
      res = await signUpCheck(
        name,
        email,
        password,
        setUserDetails,
        setLoginVisibility,
        setVerificationVisibility,
        setMessage
      );

    setMessage(res);
    setCheckingInfo(false);
  };
  return (
    <>
      {loginVisibility && (
        <div
          className="disableBackground"
          onClick={(e) => setLoginVisibility(false)}
          onMouseEnter={e=>loadCheck(e)}
          onTouchStart={e=>loadCheck(e)}
        ></div>
      )}
      {loginVisibility && (
        <>
          <div
            className="shadow-5-strong card card-body d-flex "
            id="loginBox"
            style={{
              background: "hsla(0, 0%, 100%, 0.3)",
              backdropFilter: "blur(30px)",
            }}
            onLoad={e=>loadCheck(e)}
          >
            <span
              className="closeLogin"
              onClick={(e) => setLoginVisibility(false)}
            >
              X
            </span>
            {verificationVisibility && (
              <>
                <div className="row ">
                  <AuthIcon />
                </div>
                <div className="row my-3 px-2">
                  <p>
                    {" "}
                    <b>Please check your email</b>
                  </p>
                  <p>We've sent a code to {email}</p>
                  <span style={{color:"blue"}} onClick={e=>setVerificationVisibility(false)}>Change email?</span>
                </div>
                <div className="row">
                  <SixDigitInput email={email} login={login} verificationVisibility={verificationVisibility} clear={clear}/>
                </div>
              </>
            )}
            {!verificationVisibility && (
              <div className="row">
                <div className="col-lg-8">
                  <h3 className="fw-bold ">
                    {isLogin ? "Login" : "Sign up"} now
                  </h3>
                  <form>
                    {/* <!-- 2 column grid layout with text inputs for the first and last names --> */}
                    {!isLogin && (
                      <input
                        value={name}
                        required
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Name"
                        type="text"
                        id="form3Example1"
                        className="form-control"
                      />
                    )}

                    {/* <!-- Email input --> */}
                    <input
                      value={email}
                      required
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Email Address"
                      type="email"
                    />

                    {/* <!-- Password input --> */}
                    <div className="form-control" id="form3Example4">
                      <input
                        value={password}
                        required
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Password"
                        type={showPassword ? "text" : "password"}
                      />
                      {showPassword ? (
                        <BsEye id="eye" onClick={() => toggleShowPassword()} />
                      ) : (
                        <BsEyeSlash
                          id="eye"
                          onClick={() => toggleShowPassword()}
                        />
                      )}
                    </div>

                    {/* <!-- Error Message --> */}
                    <div className="error-message">
                      <span className="error-text" style={{ color: "#b94747" }}>
                        {message.length > 0 ? "! " + message : ""}
                      </span>
                    </div>

                    {/* <!-- Submit button --> */}
                    <button
                      disabled={checkingInfo ? true : false}
                      onClick={(e) => loginButtonClick(e)}
                      className="btn btn-primary btn-block "
                    >
                      {isLogin ? "Login" : "Sign up"}
                    </button>

                    {/* <!-- Register buttons --> */}
                    {isLogin && (
                      <div className="text-center">
                        or {isLogin ? "Login" : "Sign up"} with:
                        <FaFacebookSquare
                          className="socialIcon"
                          style={{
                            height: "20px",
                            width: "20px",
                            marginTop: "10px",
                            marginLeft: "10px",
                          }}
                        />
                        <FcGoogle
                          className="socialIcon"
                          style={{
                            height: "20px",
                            width: "20px",
                            marginTop: "10px",
                            marginLeft: "10px",
                          }}
                        />
                      </div>
                    )}
                  </form>
                  <div className="text-center ">
                    {isLogin
                      ? "Don't have an account?"
                      : "Already have an account?"}
                    <a
                      className=" text-decoration-none text-primary"
                      onClick={(e) => setIsLogin((val) => !val)}
                    >
                      {isLogin ? "Sign up" : "Login"}
                    </a>
                  </div>
                </div>
              </div>
            )}
          </div>
        </>
      )}
    </>
  );
};

const loginCheck = async (
  email,
  password,
  setUserDetails,
  setLoginVisibility,
  setUserCartDetails,
  setMessage,
  setVerificationVisibility,
  setTempName
) => {
  console.log("forget password to be implemented");
  if (email == null || email.length < 1) return;
  let res = await axios_post("login", {
    email: email,
    password: password,
  })
    .then((res) => res.data)
    .catch((err) => console.log(err));
    if(res==undefined){
      return 'Something went wrong!!'
    }
  if (res == "fail") return "Username/password is incorrect";
  if(res['verified']==0){
    let name = res["name"];
    await setTempName(val=>name)
    let res2 = axios_post('sendVerificationCode',{email:email})
    .then(res=>res.data)
    .catch(err=>console.log(err))
     if(res2!=undefined){
        setVerificationVisibility(true)
        return "Please! verify email to continue login."
     }
     else return 'Something wend wrong!!'
    }
    let name = res["name"];
    let sessionId= res["sessionId"]
    sessionStorage.setItem('sessionId',sessionId)

  console.log("Account verification check before login")
  await setUserDetails(name, email);

  sessionStorage.setItem("userEmail", email);
  sessionStorage.setItem("userName", name);
  sessionStorage.setItem("isLogin", true);
  setLoginVisibility(false);

  //set login validity 24 hours
  localStorage.setItem("userEmail", email);
  localStorage.setItem("userName", name);
  localStorage.setItem("isLogin", true);
  localStorage.setItem("lastLogin", new Date().toLocaleDateString());

  const updateCart = async () => {
    if (email !== "") {
      let flag = false;
      let res = await axios_post("getCartProducts", { email: email })
        .then((res) => res.data)
        .catch((err) => {
          console.log(err);
          flag = true;
        });
      if (flag) return;
      // console.log(res)
      let arr = [];
      await res.map((item) => arr.push(item[0]));
      await setUserCartDetails(arr);
      console.log(arr);
    }
  };
  updateCart();

  await new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, 2000);
  });
  return "Username/password is incorrect";
};

const signUpCheck = async (
  name,
  email,
  password,
  setUserDetails,
  setLoginVisibility,
  setVerificationVisibility
) => {
  if (name.length < 1) {
    return "All fields are mandatory.";
  }
  let country = "";
  let date = new Date().toLocaleDateString();
  const fetchData = async () => {
    try {
      const response = await fetch("https://geolocation-db.com/json/");
      const data = await response.json();
      country = data.country_code;
    } catch (error) {
      console.log("Error fetching country:", error);
    }
  };
  await fetchData();
  //Check user Existance
  let ifUserExists = await axios_post("userExistance", { email: email })
    .then((res) => res.data)
    .catch((err) => console.log(err));
  if (ifUserExists == 1) {
    return "You are already registered";
  }

  //Verify Email
  let verify = await verifyEmailId();
  if (!verify) return "Verification failed.";

  //register user
  let res = await axios_post("registerUser", {
    name: name,
    password: password,
    email: email,
    country: country,
    date: date,
  })
    .then((res) => res.data)
    .catch((err) => console.log(err));
  //login user
  if (res == 1) {
    setVerificationVisibility(true)
    return "Successfull"
  }
  else if(res== "Email not sent"){
    return "Email was not sent!! Please check the email."
  }
  console.log(res, "AR");

  
  return "An error occured during registration.  ";
};

const verifyEmailId = async () => {
  console.log("Signup Verification Pending");
  return true;
};
export default Login;

const AuthIcon = () => {
  return (
    <img
      style={{ width: "100px" }}
      src="data:image/png;base64,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"
    ></img>
  );
};
const SixDigitInput = ({email,login,verificationVisibility,clear}) => {
  const [verificationMessage, setVerificationMessage] = useState('')
  const [code, setCode] = useState(["","","","","",""])
  const [verificationCode, setVerificationCode] = useState('')
  const [toogleTimer, setToogleTimer] = useState(true)
  const [counter, setCounter] = useState(10)
  const [resendDisable, setResendDisable] = useState(true)
  useEffect(() => {
    let str=""
    code.forEach(data=>{
      str+=data
    })
    setVerificationCode(val=>str)
  }, [code])

  useEffect(() => {

    let fn=async()=>{
      setResendDisable(true)
      for(let i=counter-1;i>0;i--){
        await new Promise((resolve,reject)=>{
          setTimeout(() => {
            setCounter(i);
            resolve()
          }, 1000);
        })
      }
      setResendDisable(false)
    }
    fn()
  }, [verificationVisibility,toogleTimer])
  
  const onsubmit=async(e,)=>{
    e.preventDefault();
    if(verificationCode.length!=6){
      setVerificationMessage("Please! Enter valid verification code")
      return
    }
    if(email==''){
      setVerificationMessage("Something went wrong!! Please login and verify")
      return
    }
    let res= await axios_post("verifyCode",{
      email:email,
      code: verificationCode
    })
    .then(res=>res.data)
    .catch(err=>console.log(err))
    if(res!=undefined && res){
      let sessionId=res['sessionId'] ;
      sessionStorage.setItem('sessionId',sessionId)
      await login()
    }
    else setVerificationMessage("Please! Enter valid verification code")
  }

  const handleKeyDown=(e, index)=>{
    let key = e.key;
    if(key=="Backspace"){
      let arr=[...code]
      arr[index-1]=""
      setCode(val=>arr)
      if(index==1)return
      document.getElementById('verification'+(index-1)).focus()
    } 
    else if("0123456789".includes(key)){
      let arr=[...code]
      arr[index-1]= key
      setCode(val=>arr)
      if(index<6)
      document.getElementById('verification'+(index+1)).focus()
    }
    else return
  }

  const resendCode=async()=>{
    //Resend code
    setResendDisable(true)
    let res= await axios_post('resendVerificationCode',{email:email})
    .then(res=>res.data)
    .catch(err=>console.log(err))
    console.log(res);
    setCounter(val=>30);
    setToogleTimer(val=>!val);
  }
  
  return <form  id= "verification_code_form" >
  <h4 className="text-center mb-4">Enter your code</h4>
  <div className="d-flex mb-3">
    {[1,2,3,4,5,6].map((data,index)=>{
      return(
        <input
      type="tel"
      maxLength="1"
      pattern="[0-9]"
      className="form-control "
      id={"verification"+data}
      onKeyDown={e=>handleKeyDown(e,data)}
      value={code[data-1]}
      key={"sixdigitinput"+index}
      onChange={e=>e}
    />
      )
    })}
    
  </div>
  <div className="row">
  <button type="button" disabled={resendDisable} onClick={e=>resendCode()} style={{width:"max-content"}}> {resendDisable? "Resend code in "+counter+" seconds": "Resend Code"} </button>
    <span style={{color:"transparent",fontSize:"20px", textShadow:"-1px -1px 0 red, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000"}}>{verificationMessage}</span>
  </div>
  <div className="row">
    <button  type="button" onClick={e=>onsubmit(e)} className="rounded w-50 btn btn-primary">
    Verify account
  </button>
  </div>
  
</form>;
};

//email - name - password - country - date - visitCount
