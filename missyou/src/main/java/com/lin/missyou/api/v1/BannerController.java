/**
 * @作者 7七月
 * @微信公号 林间有风
 * @开源项目 $ http://7yue.pro
 * @免费专栏 $ http://course.7yue.pro
 * @我的课程 $ http://imooc.com/t/4294850
 * @创建时间 2020/2/8 8:37 下午
 */
package com.lin.missyou.api.v1;

import com.lin.missyou.dot.PersonDTO;
import com.lin.missyou.exception.http.ForbiddenException;
import com.lin.missyou.service.BannerService;
import org.hibernate.validator.constraints.Length;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.validation.constraints.NotBlank;


@RestController
@RequestMapping("/banner")
public class BannerController {

    @Autowired
    private BannerService bannerService;

    @GetMapping("/name/name")
    public void getByName(@PathVariable @NotBlank String name) {

    }

    @PostMapping("/test/{id1}")
    public String test(@PathVariable(name = "id1") Integer id,
                       @RequestParam @Length(min = 8) String name,
                       @RequestBody PersonDTO persion) {
        PersonDTO dto = PersonDTO.builder()
                .name("7月")
                .age(18)
                .build();

        throw new ForbiddenException(10000);
    }
}
