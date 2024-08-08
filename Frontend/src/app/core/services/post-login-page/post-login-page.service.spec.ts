import { TestBed } from '@angular/core/testing';

import { PostLoginPageService } from './post-login-page.service';

describe('PostLoginPageService', () => {
  let service: PostLoginPageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PostLoginPageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
