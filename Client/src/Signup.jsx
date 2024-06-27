// "./src/pages/Signup.jsx"

import signupImg from "./assets/signup.webp"
import Template from "./Template"

function Signup() {
  return (
    <Template
      title="Join the millions to Earn Millions for free"
      description1="Build skills for today, tomorrow, and beyond."
      description2="Future-proof your career."
      image={signupImg}
      formType="signup"
    />
    // <h1>Signup ARRIVED</h1>
  )
}

export default Signup