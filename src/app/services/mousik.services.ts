import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Artist } from '../interfaces/Artist';

@Injectable({ providedIn: 'root'})
export class ArtistsInfoService {

  collectionRef: AngularFirestoreCollection<Artist>;
  private mainDbPath = '/artistsInfo';

  constructor(private afs: AngularFirestore) {
    this.collectionRef = this.afs.collection(this.mainDbPath);
   }

  getAllDocuments(): AngularFirestoreCollection<Artist> {
    return this.collectionRef;
  }

  getOneDocument(slug: string): any {
    return this.collectionRef.doc(slug).ref.get();
  }

  deleteDocument(slug: string): Promise<void> {
    return this.collectionRef.doc<Artist>(slug).delete();
  }

  createDocument(slug: string, artistObj: Artist): any {
    return this.collectionRef.doc(slug).set(artistObj);
  }

  updateDocument(slug: string, artistObj: Artist): Promise<void> {
    return this.collectionRef.doc(slug).update(artistObj);
  }
}
