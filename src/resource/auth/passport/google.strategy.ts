import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-google-oauth20';
import { Injectable } from '@nestjs/common';

// import { googleConfig } from '../config/google-config';
import { AuthService } from '../auth.service';
// import { Token } from '../interface/token.interface';

import Google from 'passport-google-oauth20';

import express from 'express';

// function verify(
//     req: express.Request,
//     accessToken: string,
//     refreshToken: string,
//     profile: Google.Profile,
//     done: Google.VerifyCallback){
    
//     console.log('accessToken in Google validate : ',accessToken);
//     console.log('refreshToken in Google validate : ',refreshToken);
//     console.log(profile);
//     done(null,profile.id);
// }

const config = {
  clientID: '652559907955-u17jnat6auvjqe1kcq6imhn67jdnppbl.apps.googleusercontent.com',
  clientSecret: 'I4BRjcNIXF5quc3V5T3uKkiA',
  callbackURL: 'http://localhost:3000/auth/google/callback',
  passReqToCallback: true,
  scope: ['email', 'profile'],
}
      
@Injectable()
export class GoogleStrategy extends PassportStrategy(Strategy, 'google'){
    constructor(private readonly authService: AuthService){
        super({
            ...config
        });
    }

    async validate(request: any, accessToken: string, refreshToken: string, profile, done: Function){
        try{
            // const jwt: Token = await this.authService.createJWT(profile.id);
            // console.log('accessToken in Google validate : ',accessToken);
            // console.log('refreshToken in Google validate : ',refreshToken);
            // console.log('[In Google Validate]', profile);

            /**
             * 여기에서 프로필 관련 로직 작성 하시면 빕빕빕빕
             * @param
             */

            const newUser = {
              id: profile._json.sub,
              email: profile._json.email,
              pw: 'test',
            }

            this.authService.addUser(newUser)
              .then(() => {
                done(null, profile.name);
              })
              .catch((err) => {
                console.log('[Error in Google Validation] ... ');
                console.log(err);
                done(false);
              })
            
            /*
                1. 회원이 아닌경우  ->  회원가입 수행 , 토큰 발행 , done()
                2. 회원인 경우      ->  토큰 발행 , done()
                    
                3. accessToken 을 통한 추가 API 가 필요한 경우  -> accessToken / refreshToken 저장 및 재요청
            */
            
        }catch(err){
            done(err,false);
        }
    }
}