package vip.webmis.java.modules.admin;

import java.util.HashMap;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import vip.webmis.java.common.AdminToken;
import vip.webmis.java.common.Base;

@RestController
@Controller("AdminDesktopController")
@RequestMapping("/admin/desktop")
public class DesktopController extends Base {

  /* 首页 */
  @RequestMapping("/index")
  String index(String token) {
    AdminToken.urlVerify(token,"/");
    // 返回数据
    HashMap<String, Object> _res = new HashMap<String, Object>();
    _res.put("code", 0);
    _res.put("msg", "成功");
    return getJSON(_res);
  }

}