import { Controller, Get } from '@nestjs/common'
import { ResponseBody } from '../interfaces'

@Controller('health')
export class HealthController {
  @Get()
  public healthCheck (): ResponseBody {
    return {
      success: true
    }
  }
}
