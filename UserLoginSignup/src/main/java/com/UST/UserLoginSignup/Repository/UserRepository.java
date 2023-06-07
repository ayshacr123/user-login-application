package com.UST.UserLoginSignup.Repository;

import com.UST.UserLoginSignup.Model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User,String> {
}
