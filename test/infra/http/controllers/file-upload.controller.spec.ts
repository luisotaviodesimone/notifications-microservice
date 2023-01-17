import { Test, TestingModule } from '@nestjs/testing';
import { FileUploadController } from '../../../../src/infra/http/controllers/file-upload.controller';
import { PrismaService } from '../../../../src/infra/database/prisma/prisma.service';

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
