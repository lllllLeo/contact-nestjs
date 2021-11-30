import { Prisma } from '.prisma/client';
import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Injectable()
export class ContactService {
	
	constructor(private readonly prismaService: PrismaService) {}
  
	getAllContacts() {
		return this.prismaService.contact.findMany({
			orderBy: [
				{
					id: 'desc',
				}
			]
		});
  }
	
	getContact(id: number) {
		return this.prismaService.contact.findUnique({
			where: { id },
		});
	}
	
	createContact(contactCreateInput: Prisma.ContactCreateInput) {
		return this.prismaService.contact.create({
			data: contactCreateInput
		});
	}

	delete(id: number) {
		return this.prismaService.contact.delete({
			where: { id },
		})
	}

	update(id: number, contactUpdateInput: Prisma.ContactUpdateInput) {
		return this.prismaService.contact.update({
			where: { id },
			data: contactUpdateInput,
		})
	}
}
