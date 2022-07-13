import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

private messages: string[] =[];


add(message: string): void{         // Adicionando mensagens
  this.messages.push(message);
}


clear(): void {                 // Limpando mensagens
  this.messages = [];
}


getMessages(): string[] {
  return this.messages;
}


}
