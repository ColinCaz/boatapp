import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Boat } from './boat';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BoatService {

  private boatsUrl = 'api/boats';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Access-Control-Allow-Credentials' : 'true',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PATCH, DELETE, PUT, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With',
    })
  };

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
  // à changer pour récupérer depuis l'api

  getBoats(): Observable<Boat[]> {
    return this.http.get<Boat[]>(this.boatsUrl, this.httpOptions).pipe(catchError(this.handleError<Boat[]>('getBoats', [])));
  }

  addBoat(boat: Boat): Observable<Boat> {
    return this.http.post<Boat>(this.boatsUrl, boat, this.httpOptions).pipe(catchError(this.handleError<Boat>('addBoat')));
  }

  getBoat(id: number): Observable<Boat> {
    return this.http.get<Boat>(this.boatsUrl+"/"+id, this.httpOptions).pipe(catchError(this.handleError<Boat>('getBoat id='+id)));
  }

  updateBoat(boat: Boat): Observable<Boat> {
    return this.http.put<Boat>(this.boatsUrl, boat, this.httpOptions).pipe(catchError(this.handleError<Boat>('updateBoat')));
  }

  deleteBoat(id: number): Observable<Boat> {
    return this.http.delete<Boat>(this.boatsUrl+"/"+id, this.httpOptions).pipe(catchError(this.handleError<Boat>('deleteBoat id='+id)));
  }

  constructor(private http: HttpClient) { }
}