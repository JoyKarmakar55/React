import React from 'react';
const Form=()=>{
    return(
        <div>
            <h1 style={{textAlign:'center', color:'white', backgroundColor:'black'}}> STUDENT REGISTRATION FORM</h1>
            <form style={{color:'green'}}>
            <h1 style={{textAlign:'center', color:'white', backgroundColor:'black'}}> Personal Details</h1>
                <label>Name <span style={{color:'red'}}>*</span></label>
                <input type="text" name="name" placeholder='Enter your name' required></input><br></br>

                <label>Name <span style={{color:'red'}}>*</span></label>
                <input type="text" name="name" placeholder="Enter Father's name" required></input><br></br>

                <label>Name <span style={{color:'red'}}>*</span></label>
                <input type="text" name="name" placeholder="Enter Mother's name" required></input><br></br>

                <label>Mobile Number<span style={{color:'red'}}>*</span></label>
                <input type="number" name="mobile" placeholder="Enter Your Mobile"></input><br></br>

                <label>Alt Number</label>
                <input type="number" name="mobile" placeholder="Enter Alt.No"></input><br></br>

                <label>Email Id<span style={{color:'red'}}>*</span></label>
                <input type="email" name="mail" placeholder="demo@gmail.com"></input><br></br>

                <label>Date Of Birth<span style={{color:'red'}}>*</span></label>
                <input type="date" name="dob"></input><br></br>

                <label>Adhar No<span style={{color:'red'}}>*</span></label>
                <input type="number" name="Adhar" placeholder="Enter Your Adhar card number"></input><br></br>

                <label>Gender<span style={{color:'red'}}>*</span></label>
                <select name="rel">
                    <option disabled selected value>--Select--</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                </select><br></br>

                <label>Religion<span style={{color:'red'}}>*</span></label>
                <select name="rel">
                    <option disabled selected value>--Select--</option>
                    <option value="hindu">Hindu</option>
                    <option value="islam">Islam</option>
                    <option value="sikh">Sikh</option>
                    <option value="other">Other</option>
                </select><br></br>

                <label>Photo<span style={{color:'red'}}>*</span></label>
                <input type="file" name="image"></input><br></br>

                <h1 style={{textAlign:'center', color:'white', backgroundColor:'black'}}>Address</h1>

                <label>Village <span style={{color:'red'}}>*</span></label>
                <input type="text" name="vil" placeholder="Enter your village" required></input><br></br>

                <label>Post <span style={{color:'red'}}>*</span></label>
                <input type="text" name="pos" placeholder="Enter your Post office" required></input><br></br>

                <label>Police Station <span style={{color:'red'}}>*</span></label>
                <input type="text" name="po" placeholder="Enter your Police Station" required></input><br></br>


                <label>House Number<span style={{color:'red'}}>*</span></label>
                <input type="number" name="hn" placeholder="Enter Your House number"></input><br></br>

                <label>District <span style={{color:'red'}}>*</span></label>
                <input type="text" name="dist" placeholder="Enter your District" required></input><br></br>

                <label>PIN code<span style={{color:'red'}}>*</span></label>
                <input type="number" name="pin" placeholder="Enter Your PIN code"></input><br></br>

                <h1 style={{textAlign:'center', color:'white', backgroundColor:'black'}}> Academics</h1>
                
                <label>Class<span style={{color:'red'}}>*</span></label>
                <select name="cal">
                    <option disabled selected value>--Select--</option>
                </select><br></br>

                <label>Section<span style={{color:'red'}}>*</span></label>
                <select name="sec">
                    <option disabled selected value>--Select--</option>
                </select><br></br>

                <label>Date Of Admission<span style={{color:'red'}}>*</span></label>
                <input type="date" name="dob"></input><br></br>

                <label>Previous School <span style={{color:'red'}}>*</span></label>
                <input type="text" name="pn" placeholder="Enter your Privious school name" required></input><br></br>

                <label>Current School <span style={{color:'red'}}>*</span></label>
                <input type="text" name="cn" placeholder="Enter your Current school name" required></input><br></br>


                <label>Upload TC<span style={{color:'red'}}>*</span></label>
                <input type="file" name="Tc"></input><br></br>
                
                <input type="submit" name="ok" value="Submit" style={{backgroundColor:'green',marginLeft:'910px',marginTop:'150px',marginRight:'3px'}}></input>
                <input type="reset" value="Reset" style={{backgroundColor:'red'}}></input>


















            </form>
        </div>
    )
}
export default Form