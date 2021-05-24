package com.cqut.stack.bn.api.controller;

import com.cqut.stack.bn.entity.dto.train.TrainInputDTO;
import com.cqut.stack.bn.entity.dto.train.UserInfoInputDTO;
import com.cqut.stack.bn.entity.entity.Show;
import com.cqut.stack.bn.entity.entity.Train;
import com.cqut.stack.bn.entity.global.JSONResult;
import com.cqut.stack.bn.service.ShowService;
import com.github.pagehelper.PageHelper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;
import javax.validation.Valid;

import java.util.List;



@RestController
@RequestMapping("/api")
public class ShowController {
    @Autowired
    private ShowService showService;

    /**
     * 获取收藏数据信息
     * @param inputDTO
     * @return
     */
    @GetMapping("/getData")
    public JSONResult getShowData(){
        /** mapper接口被检测前使用，紧跟的第一个select方法会被分页 */
//        PageHelper.startPage((inputDTO.getPage()-1)*inputDTO.getPageSize(),inputDTO.getPageSize());
        JSONResult<List<Train>> jsonResult = new JSONResult<>();
        jsonResult.setData(showService.getTrainData());
        jsonResult.setTotalCount(1000);
        return jsonResult;
    }

    /**
     * 获取模型数据信息
     * @param id
     * @return
     */
    @GetMapping("/generateModel")
    public JSONResult generateModel(@RequestParam String id){
        JSONResult<Show> jsonResult = new JSONResult<>();
        jsonResult.setData(showService.generateModel(id));
        return jsonResult;
    }

    @GetMapping("/getUserId")
    public JSONResult getUserId(@RequestParam String userName){
        return new JSONResult(showService.getUserId(userName));
    }


    /**
     * Java client远程开启server的python深度学习模型的程序，然后进行socket通信
     * */
    @GetMapping("/runPySocket")
    public JSONResult runPySocket(@Valid UserInfoInputDTO userInfoInputDTO) {
        JSONResult<Show> jsonResult = new JSONResult<>();
        jsonResult.setData(showService.saveModel(userInfoInputDTO));
        return jsonResult;
    }

    @GetMapping("/test")
    public void test(HttpServletRequest request,HttpServletRequest response){
//        JWTResult result = JWTUtils.checkToken(token);
//        Long userId = result.getUserId();
        showService.test(request);
    }
}
