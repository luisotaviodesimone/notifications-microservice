import { decodeUTF8 } from '@helpers/encoding.helper';
import { PrismaService } from '@infra/database/prisma/prisma.service';
import {
  Controller,
  Get,
  Param,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { File } from '@prisma/client';

@Controller('file')
export class FileUploadController {
  constructor(private prismaService: PrismaService) {}

  @Post()
  @UseInterceptors(FileInterceptor('file'))
  async uploadFile(@UploadedFile() file: Express.Multer.File): Promise<void> {
    const { buffer, originalname, size, encoding, mimetype } = file;

    await this.prismaService.file.create({
      data: {
        buffer,
        originalName: decodeUTF8(originalname),
        size,
        encoding,
        mimeType: mimetype,
      },
    });
  }

  @Get(':id')
  async getFile(@Param() { id }): Promise<File> {
    const file = await this.prismaService.file.findFirst({ where: { id } });

    if (!file) {
      throw new Error('File not found');
    }

    return file;
  }
}
