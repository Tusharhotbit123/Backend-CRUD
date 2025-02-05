import passport from "../config/passport"

const authenticateJWT=passport.authenticate("jwt",{session:false})

export default authenticateJWT;