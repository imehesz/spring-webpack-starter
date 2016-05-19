package app.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.stereotype.Controller;

@Controller
public class SpaController {
    @RequestMapping("/spa/main")
    public String main() {
        return "spa/main";
    }
}
