import { Box, Button, Dialog, DialogContent, TextField, Typography, styled } from "@mui/material"
import { useState, useContext } from "react"
import { authenticateLogin, authenticateSignup } from "../../service/api";
import { DataContext } from "../../context/DataProvider";

const Component = styled(DialogContent)`
    height: 70vh;
    width: 90vh;
    padding: 0;
    padding-top: 0;
    overflow: hidden;
`;

const LoginButton = styled(Button)`
    text-transform: none;
    background: #FB641B;
    color: #fff;
    height: 48px;
    border-radius: 2px;
`;

const RequestOTP = styled(Button)`
    text-transform: none;
    background: #fff;
    color: #2874f0;
    height: 48px;
    border-radius: 2px;
    box-shadow: 0 2px 4px 0 rgb(0 0 0 / 20%);
`;

const Text = styled(Typography)`
    color: #878787;
    font-size: 12px;
`;

const CreateAccount = styled(Typography)`
    margin: auto 0 5px 0;
    text-align: center;
    color: #2874f0;
    font-weight: 600;
    font-size: 14px;
    cursor: pointer
`

const Error = styled(Typography)`
    margin-top: 10px;
    color: #ff6161;
    font-weight: 600;
    font-size: 12px;
    line-height: 0;
`

const Wrapper = styled(Box)`
    padding: 25px 35px;
    display: flex;
    flex: 1;
    overflow: auto;
    flex-direction: column;
    & > div, & > button, & > p {
        margin-top: 20px;
    }
`;

const Image = styled(Box)`
    background: #2874f0 url(https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png) center 85% no-repeat;
    width: 30%;
    height: 80%;
    padding: 45px 35px;
    & > p, & > h5 {
        color: #FFFFFF;
        font-weight: 600
    }
`;


const accountInitialValues = {
  login: {
    view: 'login',
    heading: "Login",
    subheading: "Get access to your Orders, Wishlist and Recommendation"
  },
  signup: {
    view: 'signup',
    heading: "Looks like you're new here!",
    subheading: "Sign up with your username to get started"
  }
}

const signupInitialValues = {
  firstname: '',
  lastname: '',
  username: '',
  email: '',
  password: '',
  phone: '',
}

const loginInitialValues = {
  username: '',
  password: '',
}

const LogInDialog = ({ open, setOpen }) => {
  const [account, toggleAccount] = useState(accountInitialValues.login)
  const [signup, setSignUp] = useState(signupInitialValues)
  const [login, setLogin] = useState(loginInitialValues)
  const [error, setError] = useState(false)
  const { setAccount } = useContext(DataContext)

  const handleClose = () => {
    setOpen(false)
    toggleAccount(accountInitialValues.login)
    setError(false)
  }

  const toggleSignUp = () => {
    toggleAccount(accountInitialValues.signup)
  }

  const onInputChange = (e) => {
    setSignUp({ ...signup, [e.target.name]: e.target.value })
  }

  const onValueChange = (e) => {
    setLogin({ ...login, [e.target.name]: e.target.value })
  }

  const loginUser = async () => {
    let response = await authenticateLogin(login)
    if (response.status === 200) {
      handleClose()
      setAccount(response.data.data.firstname)
    } else {
      setError(true);
    }
  }

  const signupUser = async () => {
    let response = await authenticateSignup(signup)
    if (!response) return
    handleClose()
    setAccount(signup.firstname)
  }

  return (
    <Dialog open={open} onClose={handleClose} PaperProps={{ sx: { maxWidth: 'unset' } }}>
      <Component>
        <Box style={{ display: "flex", height: "100%" }}>
          <Image>
            <Typography variant="h5">{account.heading}</Typography>
            <Typography style={{ marginTop: "20px" }}>{account.subheading}</Typography>
          </Image>

          {account.view === 'login' ?
            <Wrapper>
              <TextField variant="standard" label="Enter Username" onChange={(e) => onValueChange(e)} name="username" />

              {error && <Error>Please enter valid username or password</Error>}

              <TextField variant="standard" label="Enter Password" onChange={(e) => onValueChange(e)} name="password" />
              <Text>By continuing, you agree to Flipkart's Terms of Use and Privacy Policy.</Text>
              <LoginButton onClick={() => loginUser()}>Login</LoginButton>
              <Typography style={{ textAlign: "center" }}>OR</Typography>
              <RequestOTP>Request OTP</RequestOTP>
              <CreateAccount onClick={() => toggleSignUp()}>New to Flipkart? Create an account</CreateAccount>
            </Wrapper>
            :
            <Wrapper>
              <TextField variant="standard" onChange={(e) => onInputChange(e)} name='firstname' label='Enter Firstname' />
              <TextField variant="standard" onChange={(e) => onInputChange(e)} name='lastname' label='Enter Lastname' />
              <TextField variant="standard" onChange={(e) => onInputChange(e)} name='username' label='Enter Username' />
              <TextField variant="standard" onChange={(e) => onInputChange(e)} name='email' label='Enter Email' />
              <TextField variant="standard" onChange={(e) => onInputChange(e)} name='password' label='Enter Password' />
              <TextField variant="standard" onChange={(e) => onInputChange(e)} name='phone' label='Enter Phone' />
              <LoginButton onClick={() => signupUser()}>Continue</LoginButton>
            </Wrapper>
          }

        </Box>
      </Component>
    </Dialog>
  )
}

export default LogInDialog