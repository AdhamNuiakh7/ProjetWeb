package Projetweb.marketplace.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import Projetweb.marketplace.model.Client;
import org.springframework.stereotype.Repository;

import java.util.Optional;
@Repository
public interface ClientRepo extends JpaRepository<Client, Long> {
    void deleteClientById(Long id);

    Client save(Client client);
    Optional<Client> findClientById(Long id);
}
