/**
 * @作者 7七月
 * @微信公号 林间有风
 * @开源项目 $ http://7yue.pro
 * @免费专栏 $ http://course.7yue.pro
 * @我的课程 $ http://imooc.com/t/4294850
 * @创建时间 2020/3/5 10:06 下午
 */
package com.lin.missyou.dot;

import com.lin.missyou.validators.PasswordEqual;
import lombok.*;
import org.hibernate.validator.constraints.Length;

//@Setter
//@AllArgsConstructor           // 全参注解
//@NoArgsConstructor              // 无参注解
//@RequiredArgsConstructor        // 属性不为空的全参注解

/**
 * 使用 @Builder 模式，不能用 new 一个类，
 * 如果必须使用 new 的话，要么自己写一个 Constructor
 * 要么使用 @NoArgsConstructor 无参注解
 * <p>
 * 如果使用 Builder 模式，而这个类又要当做 Bean 返回前端时，需要在补充一个 @Getter 注解
 */
@Builder
@Getter
@PasswordEqual(min = 1,message = "两次密码不相同")
public class PersonDTO {

    //    @NonNull                    // 不能为空
    @Length(min = 2, max = 10, message = "xxxxx")
    private String name;
    private Integer age;

    private String password1;
    private String password2;
}
