import { Injectable } from '@nestjs/common';

@Injectable()
export class ContactService {
  getAllContacts() {
    return 'all contacts';
  }
}
