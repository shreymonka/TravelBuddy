package com.example.Backend.service.impl;

import com.example.Backend.model.Post;
import com.example.Backend.repository.PostRepository;
import com.example.Backend.service.PostService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class PostServiceImpl implements PostService {

    private final PostRepository postRepository;

    @Override
    public Post createPost(Post post) {
        return postRepository.save(post);
    }

    @Override
    public List<Post> getAllPosts() {
        return postRepository.findAll();
    }

    @Override
    public Post savePost(Post post) {
        return postRepository.save(post);
    }

}
