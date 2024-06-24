import { Injectable, inject } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, CanActivateFn, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";



export const AuthGaurd : CanActivateFn =(route, state)=> {
    const router = inject (Router);
      const isConnected = sessionStorage.getItem('isConnected') === 'true';
      if(!isConnected){
         return  router.navigateByUrl('login');
      }
      return isConnected;
  }

