import React, { useEffect } from "react";
import axios_post from "../../AxiosLinks/AxiosLinks";
import { useState } from "react";
import "./BookAStand.css";

const BookAStand = () => {
    const [disableButton, setDisableButton] = useState(false)
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
  });
  const [formError, setFormError] = useState({
    firstNameError: "",
    lastNameError: "",
    emailError: "",
    confirmEmailError: "",
    phoneNoError: "",
    countryOfResidenceError: "",
    goalToAchieveError: "",
  });
  useEffect(() => {
    let error1 = {};
    let value1 = {};
    arr.forEach((data) => {
      error1[data["error"]] = "";
      value1[data["name"]] = "";
    });
    setFormData((val) => {
      return { ...val, ...value1 };
    });
    setFormError((val) => {
      return { ...val, ...error1 };
    });
  }, []);

  const submitHandler = async (e) => {
    e.preventDefault();
    setDisableButton(true)
    let result = submitValidator(formData,setFormError)
    if(!result){
        setDisableButton(false)
        return
    }

    let namesArray= arr.map(data=>{
        return data['name']
    })
    let obj={}
    namesArray.forEach(name=>{
        obj[name]= formData[name]
    })
    obj['namesArray']=namesArray
    let res= await axios_post("book_a_stand_email", obj)
    .then(res=>res.data)
    .catch(err=>console.log(err))
    console.log(res)
    setDisableButton(false)
  };
  return (
    <div className="bookastand_container container">
      <div className=" text-center mt-5 ">
        <h1 className="color-white" style={{height: '10px',}}>Book A Stand</h1>
      </div>
      {arr.map((data, index) => {
        return (
          <div className="row my-3" key={"bookAstandMultiRowKey" + index}>
            <div className="grid-layout-col">
              <div className="layout-col col-sm-12 col-xs-12">
                <div className=" form-element-layout row">
                  <div
                    style={{ textAlign: "left", paddingRight: "15px" }}
                    className="col-sm-4 col-xs-12"
                  >
                    <label
                      className="color-white"
                      htmlFor={"book_a_stand" + data["id"]}
                    >
                      {data["label"]}
                      <span className="color-red"> *</span>
                    </label>
                  </div>
                  <div className="col-sm-8 col-xs-12">
                    <div className="row">
                      <div className="col-xs-12">
                        <div className="field-control-wrapper">
                        {data['inputType']==='select'?
                        <select name={data['name']} 
                        id={"book_a_stand" + data["id"]}
                        style={{width:"100%"}}
                        value={formData[data['name']]}
                        onChange={e=>onChangeHandler(e,
                                setFormData,
                                setFormError,
                                data["name"],
                                data["inputType"],
                                data["error"],
                                formData)}
                        >
                        <option value="" selected disabled>{data['placeHolder']}</option>
                        {data['optionsArray']?.map((data,index)=>{
                          return(
                            <option value={data} key={"bookOptionsCountry"+index}>{data}</option>
                          )
                        })}
                        </select>
                        :
                        <input
                            type={data["inputType"]}
                            className=""
                            name={data["name"]}
                            id={"book_a_stand" + data["id"]}
                            value={formData[data["name"]]}
                            onChange={(e) =>
                              onChangeHandler(
                                e,
                                setFormData,
                                setFormError,
                                data["name"],
                                data["inputType"],
                                data["error"],
                                formData
                              )
                            }
                            style={{ width: "100%" }}
                          />
                        }
                          
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-xs-12">
                        <div className="field-control-wrapper color-warning">
                          <span>{formError[data["error"]]}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
      <div className="row" style={{justifyContent:"center"}}>
        <button type="button"
        disabled={disableButton}
        className="form-button-1"
         onClick={e=>submitHandler(e)}
         style={{width:"max-content", padding:"10px 20px"}}
         >
         Submit
         </button>
      </div>
    </div>
  );
};

export default BookAStand;

const onChangeHandler = (
  e,
  setFormData,
  setFormError,
  name,
  type,
  errorName,
  formData
) => {
    let value = e.target.value;
    if (type !== "text" && type !== "number" && type !== "email") {
    setFormData((val) => {
      val[name] = value;
      return { ...val };
    });
    return
  }
  let errorCodeArray = inputValidator(name, value,formData);
//   return
  let errorCode= errorCodeArray[0]
  let errorMessage= errorCodeArray[1]

  switch (errorCode) {
    case 0: //Set Form Data as Input
      setFormData((val) => {
        val[name] = value;
        return { ...val };
      });
      setFormError((val)=>{
        val[errorName]=""
        return {...val}
      })
      break;
    case 1: //Set Form Data as Input with error
      setFormData((val) => {
        val[name] = value;
        return { ...val };
      });
      setFormError((val)=>{
        val[errorName]=errorMessage
        return {...val}
      })
      break;
    case 2: //Do not Set Form Data as Input and set Error
      setFormData((val) => {
        return { ...val };
      });
      setFormError((val)=>{
        val[errorName]=errorMessage
        return {...val}
      })
      break;

    default:
      break;
  }
};
const inputValidator = (name, value ,formData) => {
    if(value==='') return[0,'']
    if(name==='email' || name==='confirmEmail')return emailValidate(name, value ,formData)
    if(name==='phoneNumber') return phoneNoValiate(value)
    return [0,'']
};

const emailValidate = (name , value ,formData) => {
    if(name==='email'){
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        let result =emailRegex.test(value);
        if(result) return [0,'']
        else return [1,'Enter a valid Email']
    }
    else{
        if(formData['email']===value){
            return [0,'']
        }
        else{
            return [1 ,'Emails do not match']
        }
    }
    
};
const phoneNoValiate = (value) => {
    const numberRegex = /^[0-9]+$/;
    let result =  numberRegex.test(value);
    if(result)return[ 0,'']
    else return [2, 'Please Enter Numbers Only']
};
const submitValidator = (formData ,setFormError) => {
    let result=true
    arr.forEach(data=>{
        let errorMessage=''
        if(formData[data['name']]=='')
        {
            result=false
           errorMessage='This field is mandatory'
        }
        let errorCodeArray= inputValidator(data['name'],formData[data['name']],formData)
        if(errorCodeArray[0]!==0)
            result=false
        if(errorCodeArray[0]===0)
        setFormError(val=>{
            val[data['error']]=errorMessage
            return {...val}
        })
    })
    return result
};
const countries = [
  "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda", "Argentina", "Armenia", "Australia",
  "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin",
  "Bhutan", "Bolivia", "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei", "Bulgaria", "Burkina Faso", "Burundi",
  "Côte d'Ivoire", "Cabo Verde", "Cambodia", "Cameroon", "Canada", "Central African Republic", "Chad", "Chile", "China",
  "Colombia", "Comoros", "Congo (Congo-Brazzaville)", "Costa Rica", "Croatia", "Cuba", "Cyprus", "Czechia (Czech Republic)",
  "Democratic Republic of the Congo", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "Ecuador", "Egypt",
  "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Eswatini", "Ethiopia", "Fiji", "Finland",
  "France", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Greece", "Grenada", "Guatemala", "Guinea", "Guinea-Bissau",
  "Guyana", "Haiti", "Holy See", "Honduras", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland",
  "Israel", "Italy", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya", "Kiribati", "Korea, North", "Korea, South", "Kosovo",
  "Kuwait", "Kyrgyzstan", "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania",
  "Luxembourg", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Mauritania",
  "Mauritius", "Mexico", "Micronesia", "Moldova", "Monaco", "Mongolia", "Montenegro", "Morocco", "Mozambique", "Myanmar (formerly Burma)",
  "Namibia", "Nauru", "Nepal", "Netherlands", "New Zealand", "Nicaragua", "Niger", "Nigeria", "North Macedonia (formerly Macedonia)",
  "Norway", "Oman", "Pakistan", "Palau", "Palestine State", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines",
  "Poland", "Portugal", "Qatar", "Romania", "Russia", "Rwanda", "Saint Kitts and Nevis", "Saint Lucia",
  "Saint Vincent and the Grenadines", "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Serbia",
  "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Solomon Islands", "Somalia", "South Africa",
  "South Sudan", "Spain", "Sri Lanka", "Sudan", "Suriname", "Sweden", "Switzerland", "Syria", "Tajikistan", "Tanzania",
  "Thailand", "Timor-Leste", "Togo", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Tuvalu",
  "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States of America", "Uruguay", "Uzbekistan",
  "Vanuatu", "Venezuela", "Vietnam", "Yemen", "Zambia", "Zimbabwe"
];
const listOfInterest=[
  'Mobicon Esports',
  'Mobicon Blockchain Convention',
  'Mobicon Cosplay',
  'Mobicon Music Concert',

]
let arr = [
  {
    label: "First Name",
    name: "firstName",
    inputType: "text",
    id: "first_name",
    error: "firstNameError",
  },
  {
    label: "Last Name",
    name: "LastName",
    inputType: "text",
    id: "last_name",
    error: "lastNameError",
  },
  {
    label: "Email",
    name: "email",
    inputType: "text",
    id: "email",
    error: "emailError",
  },
  {
    label: "Confirm Email",
    name: "confirmEmail",
    inputType: "text",
    id: "confirm_email",
    error: "confirmEmailError",
  },
  {
    label: "Phone Number",
    name: "phoneNumber",
    inputType: "number",
    id: "phone_number",
    error: "phoneNoError",
  },
  {
    label: "Country of Residence",
    name: "CountryOfResidence",
    inputType: "select",
    id: "country_of_residence",
    error: "countryOfResidenceError",
    optionsArray:countries,
    placeHolder:"Select a Country "
  },
  {
    label: "I'm Interested in",
    name: "interestedIn",
    inputType: "select",
    id: "interested_in",
    error: "interestedInError",
    optionsArray:listOfInterest,
    placeHolder:"Select an Interest "
  },
  {
    label: "Your Goal You Want To Achieve",
    name: "goalToAchieve",
    inputType: "text",
    id: "goal_to_achieve",
    error: "goalToAchieveError",
  },
];
