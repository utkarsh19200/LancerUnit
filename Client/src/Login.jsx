// "./src/pages/Login.jsx"

import loginImg from "./assets/login.webp"
import Template from "./Template"

function Login() {
  return (
    <div className="min-h-screen bg-orange-500 flex items-center justify-center">
      <Template
        title="Welcome Back"
        description1="Build skills for today, tomorrow, and beyond."
        description2="Future-proof your career."
        image={loginImg}
        formType="login"
      />
    </div>
    // <h1>Login ARRIVED</h1>
  )
}

export default Login