import dotenv from "dotenv";
import passport from "passport";
import { Strategy, ExtractJwt } from "passport-jwt";
import authorization from "../services/authService";

dotenv.config();

let opts = {
  jwtFromRequest: ExtractJwt.fromHeader("token"),
  secretOrKey: process.env.SECRET_KEY as string,
};

passport.use(
  new Strategy(opts, async (jwtPayload, done) => {
    try {
      const user = await authorization.findUser(jwtPayload.userId as string);

      if (!user) return done(null, false);

      return done(null, user);
    } catch (err) {
      return done(err);
    }
  }),
);

export default passport;
