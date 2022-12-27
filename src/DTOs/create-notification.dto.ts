import { IsNotEmpty, IsUUID, Length } from 'class-validator';

export class CreateNotificationDto {
  @IsNotEmpty()
  @Length(5, 240)
  content: string;

  @IsNotEmpty()
  category: string;

  @IsNotEmpty()
  @IsUUID()
  recipientId: string;

  constructor(content: string, category: string, recipientId: string) {
    this.content = content;
    this.category = category;
    this.recipientId = recipientId;
  }
}
