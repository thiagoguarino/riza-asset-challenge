import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { doc, getDoc, getFirestore } from 'firebase/firestore';
import { Artist } from '../interfaces/Artist';

@Injectable({ providedIn: 'root'})
export class ArtistsInfoService {
  constructor(private afs: AngularFirestore) { }

  getAllArtistsInfo(): Promise<any> {
    const getFireStoreData = new Promise<any>((resolve) => {
      this.afs.collection('artistsInfo').valueChanges().subscribe(artists => resolve(artists));
    });
    return getFireStoreData;
  }

  async getOneArtistInfo(slug: string): Promise<any> {
    return this.afs
    .collection<Artist>('artistsInfo')
    .doc(slug)
    .ref
    .get()
    .then((documento) => {
        if (documento.exists) {
          return documento.data();
        } else {
          return 'Doc does not exits';
        }
     });
  }

  deleteArtist(slug: string): Promise<void> {
    return new Promise<void>((resolve, _reject) => {
      this.afs.collection('artistsInfo')
        .doc<Artist>(slug)
        .delete()
        .then(() => {
            resolve();
        });
    });
  }

  // TODO: add artist

  // TODO: update artistInfo

}
