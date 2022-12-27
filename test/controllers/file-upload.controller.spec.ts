import { Test, TestingModule } from '@nestjs/testing';
import { FileUploadController } from '../../src/controllers/file-upload.controller';
import { PrismaService } from '../../src/services/prisma.service';

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
