import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
} from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  // 특정 유저 조회
  @Get('/find/:id')
  SelectOneById(@Param('id', ParseIntPipe) userId: number) {
    return this.userService.SelectOneById(userId);
  }

  // 유저 관심 지표 추가
  @Post('/favorite/add/:id')
  addFavorite(@Param('id', ParseIntPipe) userId: number, @Body() data: any) {
    return this.userService.addFavoriteOne(userId, data.indicatorId);
  }

  // 유저 관심 지표 획득
  @Get('/favorite/get/:id')
  getFavoriteIndicators(@Param('id', ParseIntPipe) userId: number) {
    return this.userService.getFavoriteIndicators(userId);
  }

  // 유저 관심 지표 삭제
  @Post('/favorite/delete/:id')
  deleteFavorite(@Param('id', ParseIntPipe) userId: number, @Body() data: any) {
    return this.userService.deleteFavoriteOne(userId, String(data.indicatorId));
  }
}