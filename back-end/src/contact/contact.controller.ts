import { Prisma, PrismaClient } from '.prisma/client';
import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { create } from 'domain';
import { identity } from 'rxjs';
import { ContactService } from './contact.service';

@Controller('contact')
export class ContactController {
  constructor(private contactService: ContactService) {}
  
	@Get()
  getAllContacts() {
    return this.contactService.getAllContacts();
  }

	@Get(':id')
	getContact(@Param('id') id) {
		return this.contactService.getContact(Number(id));
	}

  @Post()
	create(@Body() contactCreateInput: Prisma.ContactCreateInput) {
		return this.contactService.createContact(contactCreateInput);
	}

	@Delete(':id')
	delete(@Param('id') id) {
		return this.contactService.delete(Number(id));
	}

	@Put(':id')
	update(@Param('id') id, @Body() contactUpdateInput: Prisma.ContactUpdateInput ) {
		return this.contactService.update(Number(id), contactUpdateInput);
	}

}
