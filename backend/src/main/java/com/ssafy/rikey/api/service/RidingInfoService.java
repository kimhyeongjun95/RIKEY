package com.ssafy.rikey.api.service;

import com.ssafy.rikey.api.request.RidingInfoRequestDto;
import com.ssafy.rikey.api.response.RidingInfoResponseDto;

import java.util.List;

public interface RidingInfoService {

    List<RidingInfoResponseDto> getRidingInfoes(String nickname);
    void createRidingInfo(String userId, RidingInfoRequestDto ridingInfoRequestDto);
    void deleteRidingInfo(Long ridingInfoId);
}
