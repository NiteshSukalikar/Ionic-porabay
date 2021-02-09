import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class DomainDataService {
  url = "http://niteshsukalikar-001-site1.ctempurl.com/domain";
  constructor(private http: HttpClient) {}

  fetchDomainData() {
    return this.http.get(this.url);
  }

  DeleteDomainData(id) {
    return this.http.delete(this.url + "/" + id);
  }

  addDomainData(model: { title: string; desciption: string }) {
    return this.http.post<{ title: string; desciption: string }>(
      this.url,
      model
    );
  }

  updateDomainData(id, model: { title: string; desciption: string }) {
    return this.http.put<{ title: string; desciption: string }>(
      this.url + "/" + id,
      model
    );
  }
}
