package com.example.Backend.config;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.PropertySource;

@Configuration
@PropertySource("classpath:env.properties")
public class AwsConfig {

    @Value("${aws.accessKeyId}")
    private String accessKeyId;

    @Value("${aws.secretKey}")
    private String secretKey;

    @Value("${aws.s3.region}")
    private String region;

//    @Bean
//    public LambdaClient lambdaClient() {
//        AwsBasicCredentials awsCreds = AwsBasicCredentials.create(accessKeyId, secretKey);
//        return LambdaClient.builder()
//                .region(Region.of(region))
//                .credentialsProvider(StaticCredentialsProvider.create(awsCreds))
//                .build();
//    }
}
