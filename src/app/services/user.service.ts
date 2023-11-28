import { Injectable, OnInit, inject } from '@angular/core';
import { BehaviorSubject, tap, retry, catchError, from, throwError } from 'rxjs';
import { Contact } from '../models/contact.model';
import { Move, User } from '../models/user.model.ts';
import { storageService } from './async-storage.service';
import { HttpErrorResponse } from '@angular/common/http';


const ENTITY = 'user'
@Injectable({
  providedIn: 'root'
})

export class UserService {

  user = {
    _id: '',
    name: "",
    coins: 0,
    moves: [] as Move[]
  }


  private _loggedInUser$ = new BehaviorSubject(this.user)
  public loggedInUser$ = this._loggedInUser$.asObservable()

  query() {
    let connectedUser = _getFromLocalStorage()
    this._loggedInUser$.next(connectedUser)
  }

  getLoggedInUser() :User {
    return this._loggedInUser$.value
  }
  
  signup(name: string) {
    console.log(name);
    
    const newUser =
    {
      _id: _makeId(),
      name,
      coins: 100,
      moves: [] as Move[]
    }

    _saveToLocalStorage(newUser)
    this._loggedInUser$.next(newUser as User)
  }

  addMove(contact: Contact, amount: number): void {
    const move: Move = {
      toId: contact._id,
      to: contact.name,
      at: Date.now(),
      amount: amount
    }

    const moves: Move[] = [move, ...this._loggedInUser$.value.moves]

    const newUser: User = {
      ...this._loggedInUser$.value,
      moves: moves,
      coins: this._loggedInUser$.value.coins - amount
    }

    _saveToLocalStorage(newUser)
    this._loggedInUser$.next(newUser)
  }
}


function _saveToLocalStorage(data: any): void {
  localStorage.setItem(ENTITY, JSON.stringify(data));
}

function _getFromLocalStorage(): any {
  const data = localStorage.getItem(ENTITY);
  return data ? JSON.parse(data) : null;
}

function _makeId(length = 5): string {
  var txt = ''
  var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  for (var i = 0; i < length; i++) {
    txt += possible.charAt(Math.floor(Math.random() * possible.length))
  }
  return txt
}