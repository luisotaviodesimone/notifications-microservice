export class Content {
  private content: string;

  constructor(content: string) {
    const isContentLengthValid = this.validateContentLength(content);

    if (!isContentLengthValid) {
      throw new Error('Content length must be between 5 and 240 characters.');
    }

    this.content = content;
  }

  private validateContentLength(content: string): boolean {
    return content.length > 5 && content.length <= 240;
  }

  public get value(): string {
    return this.content;
  }
}
