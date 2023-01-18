import { PrismaService } from '@infra/database/prisma/prisma.service';
import { FileUploadController } from '@infra/http/controllers/file-upload.controller';
import { Test, TestingModule } from '@nestjs/testing';

describe('FileUploadController', () => {
  let controller: FileUploadController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PrismaService],
      controllers: [FileUploadController],
    }).compile();

    controller = module.get<FileUploadController>(FileUploadController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
