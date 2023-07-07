import { ForbiddenException, Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { Observable, catchError, map, tap } from 'rxjs';
import { CartEntity } from './entities/cart.entity';
import { AxiosResponse } from 'axios';
import { AddProductToCartDto } from './dto/AddProductToCart.dto';

@Injectable()
export class CartsService {
  
  constructor(private httpService: HttpService) {}
  
  addProductToCart(productToCart: AddProductToCartDto): Observable<CartEntity> {
    return this.httpService.post('/carts', productToCart)
    .pipe(
      map((response: AxiosResponse<CartEntity>) => {
        return response.data;
      }),
    ).pipe(
      catchError((error) => {
        console.log('error', error)
        throw new ForbiddenException('Cart service not available');
      }
    ));
  }

  findOne(id: number): Observable<CartEntity> {
    return this.httpService.get(`/carts/${id}`).pipe(
      map((response: AxiosResponse<CartEntity>) => response.data),
    ).pipe(
      catchError(() => {
        throw new ForbiddenException('Cart service not available');
      }));
  }

  remove(id: number, productId: number) {
    return this.httpService.delete(`/carts/${id}?productId=${productId}`).pipe(
      map((response: AxiosResponse<boolean>) => response.data),
    ).pipe(
      catchError(() => {
        throw new ForbiddenException('Cart service not available');
      }
    ));
  }
}
