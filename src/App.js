import './App.scss';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

function App() {

  const handleEmail = (e) =>{
    console.log(e.target.value)
  }

  const handlePass = (e) =>{
    console.log(e.target.value)
  }

  const handleSubmit = (e) =>{
    e.preventDefault();
    alert("Logged In")
  }

  return (
    <Box component="form" noValidate autoComplete="off">
      <div className="container_white">
        <div className='container_padding'>
          <h3 className='container_title'>Back to your digital life</h3>
          <p className='container_para'>Choose one of the option to go</p>
          <div className='input_card'>
            <TextField onChange={handleEmail} className='input'
              id="email"
              label="Email"
              type='email'
              variant="outlined" />

            <TextField onChange={handlePass} className='input'
              id="pass"
              label="Password"
              type='password'
              variant="outlined" />

          </div>

          <div className='line'>
            <p className='line_para'>Or continue with</p>
          </div>  


          <div className='social_card'>

          <div className='apple'>
              <img className='social_img' alt='' src='/1.png'/>
            </div>

            <div className='google'>
              <img className='social_img' alt='' src='/2.png'/>
            </div>

            <div className='meta'>
              <img className='social_img' alt='' src='/3.png'/>
            </div>

          </div>

          <div className='card_button'>
            <button className='button-28' type='submit' onClick={handleSubmit}>Login</button>
          </div>
        </div>
      </div>
    </Box>

  );
}

export default App;
