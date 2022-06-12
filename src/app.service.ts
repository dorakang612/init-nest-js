import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  /**
   * ### getHome()
   *
   * Home Route로 접근 시 API 소개 String을 반환합니다.
   * @returns String
   */
  getHome(): string {
    return 'Init-NestJS : The practical API project.';
  }
}
