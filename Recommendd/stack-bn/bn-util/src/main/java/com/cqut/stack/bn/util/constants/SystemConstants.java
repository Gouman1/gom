package com.cqut.stack.bn.util.constants;

public class SystemConstants {

    public static String EMPTY_STR = "";

    public static String COMMA_REGEX = ",";

    /**
     * 表示数据库中false的值
     * */
    public static byte FALSE_FLAG = 0;

    /**
     * 代表数据库中true的值
     * */
    public static byte TRUE_FLAG = 1;

    /*采购合同生成编号前缀*/
    public static String PURCHASECONTRACT_NO="CG";

    /*保养生成编号前缀*/
    public static String MAINTAIN_NO="BY";

    /*购买合同类型条件type*/
    /*合同结束日期和账单结束组*/
    public static String CONTRACT_CONDITION_TYPE_ENDTIME="1";
    /*质保结束日期和质保里程结束组*/
    public static String CONTRACT_CONDITION_TYPE_ENDMILEAGE="2";

    /*购买合同状态--待审核*/
    public static  Integer CONTRACT_STATION_WAIT=0;
    /*购买合同状态--审核通过*/
    public static Integer CONTRACT_STATION_COMPLETE=1;
    /*购买合同状态--审核失败*/
    public static Integer CONTRACT_STATION_FAIL=2;
    /*购买合同状态--待提交*/
    public static Integer CONTRACT_STATION_WAIT_COMMIT=3;
    /*购买合同状态--中止审核中*/
    public static Integer CONTRACT_STATION_TERMINATE_WAIT=4;
    /*购买合同状态--中止*/
    public static Integer CONTRACT_STATION_TERMINATE=5;
    /*购买合同状态显示文字*/
    public static  String CONTRACT_STATION_WAIT_STRING="待审核";
    public static  String CONTRACT_STATION_WAIT_COMMIT_STRING="待提交";
    public static  String CONTRACT_STATION_COMPLETE_STRING="执行中";
    public static  String CONTRACT_STATION_FAIL_STRING="审核失败";
    public static  String CONTRACT_STATION_COMMIT_STRING="审核通过";
    public static  String CONTRACT_STATION_TERMINATE_WAIT_STRING="中止审核中";
    public static  String CONTRACT_STATION_TERMINATE_STRING="中止";

    /*持有类型ID*/
    /*产权所有*/
    public static  String HOLD_TYPE_PROPERTY="1";
    /*使用权*/
    public static  String HOLD_TYPE_USE="2";

}
