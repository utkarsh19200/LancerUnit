// "./src/pages/Login.jsx"

import loginImg from "./assets/login.webp"
import Template from "./Template"

function Login() {
  return (
    <Template
      title="Welcome Back"
      description1="Build skills for today, tomorrow, and beyond."
      description2="Education to future-proof your career."
      image={loginImg}
      formType="login"
    />
    // <h1>Login ARRIVED</h1>
  )
}

export default Login