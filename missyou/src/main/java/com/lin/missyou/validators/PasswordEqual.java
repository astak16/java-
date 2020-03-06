package com.lin.missyou.validators;

import javax.validation.Constraint;
import javax.validation.Payload;
import java.lang.annotation.*;

@Documented     // 让 document 中的注释可以加到文档中
@Retention(RetentionPolicy.RUNTIME)     // 这些注解要保留到什么阶段
@Target({ElementType.TYPE})     // 指定可以用在哪些上面
@Constraint(validatedBy = PasswordValidators.class)
public @interface PasswordEqual {
    int min() default 4;

    int max() default 6;

    String message() default "password are not equal";

    Class<?>[] groups() default {};

    Class<? extends Payload>[] payload() default {};
}
