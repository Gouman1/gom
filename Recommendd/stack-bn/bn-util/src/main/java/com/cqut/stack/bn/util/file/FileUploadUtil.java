package com.cqut.stack.bn.util.file;

import com.aliyun.oss.OSSClient;
import com.aliyun.oss.model.ObjectMetadata;
import com.aliyun.oss.model.PutObjectResult;

import java.io.InputStream;
import java.util.Date;
import java.util.UUID;

/**
 * 杨强
 * 2018.6.8
 * 用来上传文件到本人的oss文件系统当中
 */
public class FileUploadUtil {

    //个人注册OSS建立实例Bucket的accessKeyId和accessKeySecret
    private static final String accessKeyId = "LTAIRSulxMCGzBvE";
    private static final String accessKeySecret = "YiIIWTZl39DthuuxTmh1QuDp1NpMMG";
    //OSS的访问地址
    private static final String endPoint = "oss-cn-shanghai.aliyuncs.com";
    //Bucket的名称
    private static final String bucketName = "img-file-library";

    /**
     * 上传文件到文件系统
     */
    public static String putObject(String fileName, InputStream inputStream) {
        OSSClient ossClient = new OSSClient(endPoint, accessKeyId, accessKeySecret);
        String url = null;

        try {
            // 创建上传Object的Metadata
            ObjectMetadata meta = new ObjectMetadata();
            meta.setContentType(getContentType(fileName));
            String key = UUID.randomUUID().toString() + fileName;

            PutObjectResult result = ossClient.putObject(bucketName, key, inputStream, meta);

            url = ossClient.generatePresignedUrl(bucketName, key, new Date(new Date().getTime() + 3600l * 1000 * 24 * 365 * 100)).toURI().toString();
        } catch (Exception e) {
            e.printStackTrace();
        }
        return url;
    }


    /**
     * 通过文件名判断并获取OSS服务文件上传时文件的contentType
     * @param fileName 文件名
     * @return 文件的contentType
     */
    private static  String getContentType(String fileName){
        //文件的后缀名
        String fileExtension = fileName.substring(fileName.lastIndexOf("."));
        if(".bmp".equalsIgnoreCase(fileExtension)) {
            return "image/bmp";
        }
        if(".gif".equalsIgnoreCase(fileExtension)) {
            return "image/gif";
        }
        if(".jpeg".equalsIgnoreCase(fileExtension) || ".jpg".equalsIgnoreCase(fileExtension)  || ".png".equalsIgnoreCase(fileExtension) ) {
            return "image/jpeg";
        }
        if(".html".equalsIgnoreCase(fileExtension)) {
            return "text/html";
        }
        if(".txt".equalsIgnoreCase(fileExtension)) {
            return "text/plain";
        }
        if(".vsd".equalsIgnoreCase(fileExtension)) {
            return "application/vnd.visio";
        }
        if(".ppt".equalsIgnoreCase(fileExtension) || "pptx".equalsIgnoreCase(fileExtension)) {
            return "application/vnd.ms-powerpoint";
        }
        if(".doc".equalsIgnoreCase(fileExtension) || "docx".equalsIgnoreCase(fileExtension)) {
            return "application/msword";
        }
        if(".xml".equalsIgnoreCase(fileExtension)) {
            return "text/xml";
        }
        //默认返回类型
        return "image/jpeg";
    }
}
