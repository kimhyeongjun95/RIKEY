package com.ssafy.rikey.api.service;

import com.ssafy.rikey.api.request.RidingInfoRequestDto;
import com.ssafy.rikey.api.response.RidingInfoResponseDto;
import com.ssafy.rikey.db.entity.RidingInfo;
import com.ssafy.rikey.db.entity.User;
import com.ssafy.rikey.db.repository.RidingInfoRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.List;
import java.util.stream.Collectors;

@RequiredArgsConstructor
@Service
@Transactional
public class RidingInfoServiceImpl implements RidingInfoService {

    private final RidingInfoRepository ridingInfoRepository;

    // 주행 정보 조회
    @Override
    public List<RidingInfoResponseDto> getRidingInfos(User user) {
        List<RidingInfo> ridingInfoes = ridingInfoRepository.findByUser(user);
        return ridingInfoes.stream().map(RidingInfoResponseDto::new).collect(Collectors.toList());
    }

    // 주행 정보 등록
    @Override
    public void createRidingInfo(User user, RidingInfoRequestDto ridingInfoRequestDto) {
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss.SSS");

        RidingInfo ridingInfo = RidingInfo.builder()
                .startTime(LocalDateTime.parse(ridingInfoRequestDto.getStartTime(), formatter))
                .endTime(LocalDateTime.parse(ridingInfoRequestDto.getStartTime(), formatter))
                .ridingCalorie(ridingInfoRequestDto.getRidingCalorie())
                .ridingTime(ridingInfoRequestDto.getRidingTime())
                .ridingDist(ridingInfoRequestDto.getRidingDist())
                .user(user)
                .build();
        ridingInfoRepository.save(ridingInfo);
    }
}
