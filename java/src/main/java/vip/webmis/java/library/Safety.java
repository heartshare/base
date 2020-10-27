package vip.webmis.java.library;

import java.util.HashMap;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

import vip.webmis.java.Env;

import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.TypeReference;
import com.auth0.jwt.JWT;
import com.auth0.jwt.algorithms.Algorithm;
import com.auth0.jwt.interfaces.DecodedJWT;
import com.auth0.jwt.exceptions.JWTCreationException;
import com.auth0.jwt.exceptions.JWTDecodeException;

/**
 * 安全验证类
 */
public class Safety {

  /* 正则 */
  public static boolean isRight(String name, String val){
    HashMap<String,Object> data = new HashMap<String,Object>();
    data.put("uname", "^[a-zA-Z][a-zA-Z0-9\\_\\@\\-\\*\\&]{3,15}$");
    data.put("passwd", "^[a-zA-Z0-9|_|@|-|*|&]{6,16}$");
    data.put("tel", "^1\\d{10}$");
    data.put("email", "^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(\\.[a-zA-Z0-9_-])+");
    data.put("idcard", "^[1-9]\\d{7}((0\\d)|(1[0-2]))(([0|1|2]\\d)|3[0-1])\\d{3}$|^[1-9]\\d{5}[1-9]\\d{3}((0\\d)|(1[0-2]))(([0|1|2]\\d)|3[0-1])\\d{3}([0-9]|X)$");
    Pattern pattern = Pattern.compile((String.valueOf(data.get(name))));
    Matcher matcher = pattern.matcher(val);
    return matcher.matches();
  }

  /* 加密 */
  public static String encode(HashMap<String,Object> data){
    String token = null;
    try {
      Algorithm algorithm = Algorithm.HMAC256(Env.key);
      token = JWT.create().withIssuer(JSON.toJSONString(data)).sign(algorithm);
      return token;
    } catch (JWTCreationException exception){
      return token;
    }
  }

  /* 解密 */
  public static HashMap<String,Object> decode(String token){
    HashMap<String,Object> res = null;
    try {
      DecodedJWT jwt = JWT.decode(token);
      String data = jwt.getIssuer();
      return JSON.parseObject(data,new TypeReference<HashMap<String,Object>>(){});
    } catch (JWTDecodeException exception){
      return res;
    }
  }
  
}
