package com.example.Backend.controller;

import com.example.Backend.model.Post;
import com.example.Backend.service.PostService;

import lombok.RequiredArgsConstructor;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequestMapping("/api/posts")
@RequiredArgsConstructor
public class PostController {

    private final PostService postService;

    @PostMapping("/createPost")
    public ResponseEntity<Post> createPost(@RequestBody Post post) {
        Post savedPost = postService.savePost(post);
        return ResponseEntity.ok(savedPost);
    }

    @GetMapping("/getPost")
    public ResponseEntity<List<Post>> getAllPosts() {
        List<Post> posts = postService.getAllPosts();
        return ResponseEntity.ok(posts);
    }
}