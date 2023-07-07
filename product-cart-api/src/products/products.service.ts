import { HttpService } from '@nestjs/axios';
import { ForbiddenException, Injectable } from '@nestjs/common';
import { ProductEntity } from './entities/product.entity';
import { Observable, catchError, map } from 'rxjs';
import { AxiosResponse } from 'axios';

@Injectable()
export class ProductsService {

  constructor(private httpService: HttpService) {}
  
  findAll(): Observable<ProductEntity[]> {
    return this.httpService.get('/products').pipe(
        map((response: AxiosResponse<ProductEntity[]>) => response.data),
      ).pipe(
        catchError(() => {
          throw new ForbiddenException('Product service not available');
        }),
      );
  }

  findOne(id: number): Observable<ProductEntity> {
    return this.httpService.get(`/products/${id}`).pipe(
        map((response: AxiosResponse<ProductEntity>) => response.data),
      ).pipe(
        catchError(() => {
          throw new ForbiddenException('Product service not available');
        }
      )
    );
  }

}
