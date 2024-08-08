package com.example.Backend.service;

import com.example.Backend.model.Post;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

public interface PostService {
    Post savePost(Post post);
    Post createPost(Post post);
    List<Post> getAllPosts();
}
